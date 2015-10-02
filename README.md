# UV-View-TW. test by honda
台灣紫外線視覺化觀測

從政府提供的 open data，取得紫外線即時監測資料
http://opendata.epa.gov.tw/Data/Contents/UV?pageIndex=1

輸入 json格式，地點經過座標轉換 (TWD97 轉成 WGS84 )

使用 Fusion Tables 進行資料呈現，可轉為在地圖上視覺化的標示

script 運作可在 google app Script 平台，搭配排程，自動抓取更新之。

Fusion Tables 內部可以用 heatmap 進行熱力圖的類型進行檢視
https://www.dropbox.com/s/7re5glax2auun0h/UVI_FT.jpg

發布則可切換 Feature map，範例：
https://www.google.com/fusiontables/embedviz?q=select+col6+from+1GiNiKHDBcEpZM5URwvBnOZULVYLfbkcZJm39ViIO&viz=MAP&h=false&lat=24.074678382073635&lng=121.29592895507812&t=1&z=8&l=col6&y=4&tmplt=5&hml=GEOCODABLE
