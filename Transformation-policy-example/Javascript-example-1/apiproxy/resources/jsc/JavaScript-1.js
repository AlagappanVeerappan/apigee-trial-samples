var item = context.getVariable('item');
var respObj = response.content.asJSON;
response.content = '';
response.headers['Content-Type'] = 'application/json';
var body = response.content.asJSON;

body.commonBasket = (respObj[0]["Bucket-Lists"]['commonBasket']).indexOf(item) < 0;
body.FruitBasket = (respObj[0]["Bucket-Lists"]['FruitBasket']).indexOf(item) >= 0;
body.VegetableBasket = (respObj[0]["Bucket-Lists"]['VegetableBasket']).indexOf(item) >= 0; 
body.ShoppingBasket = (respObj[0]["Bucket-Lists"]['ShoppingBasket']).indexOf(item) >= 0;
body.MeatBasket = (respObj[0]["Bucket-Lists"]['MeatBasket']).indexOf(item) >= 0;

