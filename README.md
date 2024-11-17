# ecommerce

Project Structure (https://app.eraser.io/workspace/7e6QfFkOIq0LNlKPslS0?origin=share)

E-commerce/
├── ecommerce-admin/            <-- Backend for admin panel
│   ├── config/
│   │   ├── constants.js
│   │   ├── db.js
│   │   └── dotenv.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   └── ...
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── ...
│   ├── routes/
│   │   ├── auth.js
│   │   ├── product.js
│   │   └── ...
│   ├── server.js
│   ├── package.json
│   └── ...
├── admin-frontend/             <-- Frontend for admin panel (React)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/           <-- API call helpers
│   │   ├── App.js
│   │   └── ...
│   ├── package.json
│   └── ...
├── ecommerce-backend/          <-- Backend for main e-commerce site
│   ├── config/
│   │   ├── constants.js
│   │   ├── db.js
│   │   └── dotenv.js
│   ├── controllers/
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── ...
│   ├── routes/
│   │   ├── product.js
│   │   ├── order.js
│   │   └── ...
│   ├── server.js
│   ├── package.json
│   └── ...
├── ecommerce-frontend/         <-- Frontend for main e-commerce site (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── services/       <-- API call helpers
│   │   └── ...
│   ├── angular.json
│   ├── package.json
│   └── ...
├── README.md                   <-- Documentation
└── .gitignore