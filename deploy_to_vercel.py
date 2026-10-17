#!/usr/bin/env python3
import hashlib, base64, json, subprocess, pathlib, sys

ROOT = pathlib.Path.home() / "workspace" / "shieldly"
EXCLUDE = {"BUILD_REPORT.md", "push_to_github.py", "deploy_to_vercel.py"}
files = []
for p in sorted(ROOT.rglob("*")):
    if p.is_file():
        rel = p.relative_to(ROOT).as_posix()
        if rel not in EXCLUDE:
            files.append((rel, p.read_bytes()))
print(f"files: {len(files)}", flush=True)

def call(name, args, timeout=300):
    res = subprocess.run(["/opt/hatch/bin/vercel", "call-tool", "--name", name,
                          "--arguments-json", json.dumps(args)], capture_output=True, text=True, timeout=timeout)
    out = (res.stdout or "") + (res.stderr or "")
    return out

refs = []
for rel, data in files:
    sha = hashlib.sha1(data).hexdigest()
    out = call("upload_file", {"requestBody": base64.b64encode(data).decode(),
                               "xVercelDigest": sha, "contentLength": len(data)}, timeout=180)
    ok = '"ok":true' in out or '"ok": true' in out
    print(f"upload {rel}: {'OK' if ok else 'FAIL ' + out[:300]}", flush=True)
    if not ok: sys.exit(1)
    refs.append({"file": rel, "sha": sha, "size": len(data)})

args = {"requestBody": {"name": "shieldly", "project": "prj_aG44ycwRk5UIJJEcfOs96s1AmW0G",
                        "target": "production", "files": refs}}
out = call("create_deployment", args, timeout=600)
print("DEPLOY RESULT:", out[:3000], flush=True)
