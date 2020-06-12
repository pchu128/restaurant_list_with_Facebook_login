# restaurantList-login
本專案是可依每個使用者客製化使用的餐廳入口網站，可以在註冊後建立自己喜歡的餐廳清單。

## 專案首頁
<img src="https://github.com/pchu128/restaurantList_login/blob/master/IndexScreenShot.png" width="600px" height="450px">

## 功能導覽
- 登入頁面
  - 依現有帳號登入
  - 直接以臉書帳號註冊同時登入
- 註冊頁面
  - 提供簡單的使用者資訊即可新建帳號
- 首頁
  - 瀏覽餐廳清單
  - 依名稱搜尋餐廳（功能暫時無法使用）
  - 依名稱、地區或類別改變餐廳排序
  - 點擊餐廳圖片進入詳細資訊頁面
  - 新增餐廳
  - 修改餐廳資訊
  - 刪除餐廳
  
- 詳細資訊頁面
  - 觀看個別餐廳的電話、類別、地點、評分、介紹等等詳細資訊。
  - 修改餐廳資訊
  - 刪除餐廳
  
- 新增、修改頁面
  - 可自行新增或修改餐廳的所有資訊
  - 新增、修改完畢後資料會存取進MongoDB資料庫

## 系統需求
- 終端機
- Node.js
- Visual Studio Code
- MongoDB
- Robo 3T (optional)

## 如何安裝？
首先開啟終端機，遵循以下步驟。
```
//將專案複製到電腦中
git clone https://github.com/pchu128/restaurantList-login.git

//進入專案資料夾
cd restaurantList-login

//安裝npm套件
npm install

//建立種子資料（提供測試功能用、建立後可使用 信箱：root@example.com, 密碼：12345678 登入）
npm run seed

//執行專案
npm run dev
```
最後開啟瀏覽器進入 http://localhost:3000 。
