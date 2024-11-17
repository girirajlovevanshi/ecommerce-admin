# ecommerce

Project Structure (https://app.eraser.io/workspace/7e6QfFkOIq0LNlKPslS0?origin=share)

E-commerce/<br>
├── ecommerce-admin/            <-- Backend for admin panel<br>
│   ├── config/<br>
│   │   ├── constants.js<br>
│   │   ├── db.js<br>
│   │   └── dotenv.js<br>
│   ├── controllers/<br>
│   │   ├── authController.js<br>
│   │   ├── productController.js<br>
│   │   └── ...<br>
│   ├── middleware/<br>
│   │   └── authMiddleware.js<br>
│   ├── models/<br>
│   │   ├── User.js<br>
│   │   ├── Product.js<br>
│   │   └── ...<br>
│   ├── routes/<br>
│   │   ├── auth.js<br>
│   │   ├── product.js<br>
│   │   └── ...<br>
│   ├── server.js<br>
│   ├── package.json<br>
│   └── ...<br>
├── admin-frontend/             <-- Frontend for admin panel (React)<br>
│   ├── public/<br>
│   ├── src/<br>
│   │   ├── components/<br>
│   │   ├── pages/<br>
│   │   ├── services/           <-- API call helpers<br>
│   │   ├── App.js<br>
│   │   └── ...<br>
│   ├── package.json<br>
│   └── ...<br>
├── ecommerce-backend/          <-- Backend for main e-commerce site<br>
│   ├── config/<br>
│   │   ├── constants.js<br>
│   │   ├── db.js<br>
│   │   └── dotenv.js<br>
│   ├── controllers/<br>
│   │   ├── productController.js<br>
│   │   ├── orderController.js<br>
│   │   └── ...<br>
│   ├── routes/<br>
│   │   ├── product.js<br>
│   │   ├── order.js<br>
│   │   └── ...<br>
│   ├── server.js<br>
│   ├── package.json<br>
│   └── ...<br>
├── ecommerce-frontend/         <-- Frontend for main e-commerce site (Angular)<br>
│   ├── src/<br>
│   │   ├── app/<br>
│   │   │   ├── components/<br>
│   │   │   ├── pages/<br>
│   │   │   └── services/       <-- API call helpers<br>
│   │   └── ...<br>
│   ├── angular.json<br>
│   ├── package.json<br>
│   └── ...<br>
├── README.md                   <-- Documentation<br>
└── .gitignore<br>