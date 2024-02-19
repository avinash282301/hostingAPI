const Product = require('../model/products')

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    if (featured) {
        queryObject.featured = featured;
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit);


    console.log(queryObject);

    const Products = await apiData;
    // res.status(200).json({ msg: "I am getAllProducts" });
    // res.status(200).json({ Products });
    res.status(200).json({ Products, nbHits: Products.length });
}

const getAllProductsTesting = async (req, res) => {
    const Products = await Product.find(req.query)
    // res.status(200).json({ msg: "I am getAllProductsTesting" });
    res.status(200).json({ Products });
    console.log(req.query);
}

module.exports = { getAllProducts, getAllProductsTesting }