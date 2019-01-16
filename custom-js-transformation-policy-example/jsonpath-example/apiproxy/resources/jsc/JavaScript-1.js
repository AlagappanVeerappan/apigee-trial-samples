var usersResponse = JSON.parse(context.getVariable('usersResponse.content'));
var addressResponse = response.content.asJSON;

var path = jsonPath(addressResponse,'$[?(@.userId=='+11+')]');
print("The users are" + path);
function grabAddress(input1UserId) {
     print("Input userid" + input1UserId);
    return (jsonPath(addressResponse,'$[?(@.userId=='+input1UserId+')]'));
}
response.content = '[]';
response.headers['Content-Type'] = 'application/json';
var outResponse = response.content.asJSON;


for(var i in usersResponse)
{
     var person = {
         "userId": usersResponse[i]["userId"],
         "name": usersResponse[i]["name"],
         "age": usersResponse[i]["age"],
         "Address": grabAddress(usersResponse[i]["userId"])[0].Address
     };
     outResponse.push(person);
}



