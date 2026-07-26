# -*- coding: utf-8 -*-
"""Renderiza os mockups visuais da pagina de vendas Usual (ebook 3D, diagnostico)."""
import os, base64, shutil
from playwright.sync_api import sync_playwright

HERE=os.path.dirname(os.path.abspath(__file__))
ROOT=os.path.abspath(os.path.join(HERE,".."))            # public/
SITE=os.path.abspath(os.path.join(ROOT,".."))            # repo root
PREV=os.path.join(SITE,"ebook-usual","assets","preview")
IMG=os.path.join(HERE,"img"); os.makedirs(IMG,exist_ok=True)
DIAG="file:///"+os.path.join(ROOT,"diagnostico","index.html").replace("\\","/")

def b64(path):
    with open(path,"rb") as f: return base64.b64encode(f.read()).decode()
COVER="data:image/png;base64,"+b64(os.path.join(PREV,"p01.png"))

BOOK=f"""<!DOCTYPE html><html><head><meta charset='utf-8'><style>
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{background:transparent}}
.stage{{width:760px;height:680px;display:flex;align-items:center;justify-content:center}}
.book{{position:relative;width:360px;height:509px;transform:perspective(2200px) rotateY(-26deg) rotateX(2deg);transform-style:preserve-3d;
  filter:drop-shadow(34px 42px 38px rgba(40,25,15,.38))}}
.cover{{position:absolute;inset:0;background:url('{COVER}') center/cover;border-radius:3px 7px 7px 3px;
  box-shadow:inset -2px 0 6px rgba(0,0,0,.18)}}
/* brilho da capa */
.cover::after{{content:'';position:absolute;inset:0;border-radius:3px 7px 7px 3px;
  background:linear-gradient(105deg,rgba(255,255,255,.34) 0%,rgba(255,255,255,0) 28%,rgba(255,255,255,0) 100%)}}
/* lombada */
.spine{{position:absolute;left:0;top:0;bottom:0;width:26px;
  background:linear-gradient(90deg,rgba(0,0,0,.32),rgba(0,0,0,.05));border-radius:3px 0 0 3px}}
/* paginas (profundidade) */
.pages{{position:absolute;top:6px;height:497px;right:-22px;width:24px;
  transform:rotateY(58deg);transform-origin:left center;
  background:repeating-linear-gradient(to right,#fff 0,#fff 1px,#e9e6e1 2px,#fff 3px);
  border-radius:0 2px 2px 0;box-shadow:0 0 2px rgba(0,0,0,.2)}}
</style></head><body>
<div class='stage'><div class='book'><div class='pages'></div><div class='cover'></div><div class='spine'></div></div></div>
</body></html>"""

INJ_RESULT="""
for(let i=0;i<15;i++){state.answers[i]=[3,1,2,1,2,1,3,2,2,1,1,2,1,2,2][i]??2;chosenIndex[i]=state.answers[i];}
state.name='Gabriel'; state.fc={leads:600,ticket:5000,ag:14,comp:60,conv:20,cpl:12,verba:7200};
setStep(8);
"""

with sync_playwright() as p:
    b=p.chromium.launch(channel="chrome")
    # 1) ebook 3D (transparente)
    import tempfile
    tf=os.path.join(IMG,"_book.html"); open(tf,"w",encoding="utf-8").write(BOOK)
    pg=b.new_page(viewport={"width":760,"height":680},device_scale_factor=2)
    pg.goto("file:///"+tf.replace("\\","/"),wait_until="load"); pg.wait_for_timeout(500)
    pg.screenshot(path=os.path.join(IMG,"ebook3d.png"),omit_background=True)
    os.remove(tf)
    # 2) diagnostico mobile (tela inicial)
    pm=b.new_page(viewport={"width":390,"height":760},device_scale_factor=2)
    pm.goto(DIAG,wait_until="load"); pm.wait_for_timeout(700)
    pm.screenshot(path=os.path.join(IMG,"diag-mobile.png"))
    # 3) diagnostico desktop (resultado)
    pd=b.new_page(viewport={"width":1040,"height":900},device_scale_factor=2)
    pd.goto(DIAG,wait_until="load"); pd.wait_for_timeout(500)
    pd.evaluate(INJ_RESULT); pd.wait_for_timeout(700)
    pd.screenshot(path=os.path.join(IMG,"diag-desktop.png"),full_page=True)
    b.close()

# 4) copia capa + paginas internas p/ "veja por dentro"
shutil.copy(os.path.join(PREV,"p01.png"),os.path.join(IMG,"ebook-cover.png"))
for src,dst in [("p06","inside-pilares"),("p13","inside-escada"),("p15","inside-oferta"),
                ("p23","inside-vendas"),("p28","inside-dimensionamento"),("p35","inside-metricas")]:
    shutil.copy(os.path.join(PREV,src+".png"),os.path.join(IMG,dst+".png"))
print("mockups ok ->",IMG)
