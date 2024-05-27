const express = require("express");
const authcontroller = require("../controllers/authcontroller");

const {
  addProductToCart,
  getLoggedUserCart,
  deleteSpecificCartItem,
  clearCart,
  updateCartItemQuantity,
  applyCoupon,
} = require("../controllers/cartController");

const router = express.Router();

// router.use("/:BrandId/subBrands", subBrandsRoute);
router.use(authcontroller.protect, authcontroller.allowedTo("user"));
// postBrands
router
  .route("/")
  .post(addProductToCart)
  .get(getLoggedUserCart)
  .delete(clearCart);

router.put("/applyCoupon", applyCoupon);

router
  .route("/:itemId")
  .delete(deleteSpecificCartItem)
  .put(updateCartItemQuantity);

module.exports = router;
