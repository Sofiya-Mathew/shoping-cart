var express = require('express');
const {render}=require('../app')
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[{
    name:"Samsung Galaxy F13",
    Category:'Mobile',
    description:'FHD+ Display 6000 mAh battery  Auto Data Switching',
    image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e135flbgins/gallery/in-galaxy-f13-sm-e135flbgins-532859063?$1300_1038_PNG$",

  },
  {
    name:'REdmi note 10 pro max',
    Category:'Mobile',
    description:"The Redmi Note 10 Pro Max (review) is the only camera in this segment to feature a 108MP main sensor.",
    image:"https://images.news18.com/ibnlive/uploads/2021/05/1620542541_redmi_note_10_pro.jpg?impolicy=website&width=510&height=356"

  },
  {
    name:"I phone 14 pro",
    Category:'Mobile',
    description:"iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. ",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSui55jKaISsqs3ERjci7bxVnEDsAAeJt3FmA&usqp=CAU"

  },
  {
    name:"Nokia G400 5G",
    Category:'Mobile',
    description:"This one is for those demanding the most from their smartphone.",
    image:"https://images.ctfassets.net/wcfotm6rrl7u/12a714nWkun6w1DYEy1Fzt/c56a5589d7659b3b86151badeb9acda0/nokia-G400_5G-color-meteor_grey-us.png?w=401&h=401&fm=avif&f=left&fit=pad&q=88"

  }]
  res.render('admin/view-products',{admin:true,products});
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  //console.log(req.body);
  //console.log(req.files.image);
  productHelper.addProduct(req.body,(result)=>{
    res.render("admin/add-product")
  })
})

module.exports = router;
