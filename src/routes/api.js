const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');
const messageController = require('../controllers/messageController');
const commentController = require('../controllers/commentController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');

// 1: Blog Controller
router.get('/blog-create', blogController.create);
router.get('/blog-update', blogController.update);
router.get('/blog-deleted', blogController.deleted);
router.get('/blog-read', blogController.read);

// 2: Comments Controller
router.get('/comment-create', commentController.create);
router.get('/comment-update', commentController.update);
router.get('/comment-deleted', commentController.deleted);
router.get('/comment-read', commentController.read);

// 3: Meessage Controller
router.get('/message-create', messageController.create);
router.get('/message-update', messageController.update);
router.get('/message-deleted', messageController.deleted);
router.get('/message-read', messageController.read);

// 4: Portfolio Controller
router.get('/portfolio-create', portfolioController.create);
router.get('/portfolio-update', portfolioController.update);
router.get('/portfolio-deleted', portfolioController.deleted);
router.get('/portfolio-read', portfolioController.read);

// 5: Product Controller
router.get('/product-create', productController.create);
router.get('/product-update', productController.update);
router.get('/product-deleted', productController.deleted);
router.get('/product-read', productController.read);

module.exports = router;
