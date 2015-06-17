# UV-View-TW
台灣紫外線視覺化觀測

從政府提供的 open data，取得紫外線即時監測資料
http://opendata.epa.gov.tw/Data/Contents/UV?pageIndex=1

輸入 json格式，地點經過座標轉換 (TWD97 轉成 WGS84 )

使用 Fusion Tables 進行資料呈現，可轉為在地圖上視覺化的標示

script 運作可在 google app Script 平台，搭配排程，自動抓取更新之。
