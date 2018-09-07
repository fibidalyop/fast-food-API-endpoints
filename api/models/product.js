const express = require('express');
const productArray = require('../dataStructure/productArray');
const model = model.express
const uniqid = require('uniqid');

const productPattern = productArray.storeProduct({
	id: uniqid(),
	name: String,
	desc: String,
	price: Number
})

module.exports = models;