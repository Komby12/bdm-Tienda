<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paypal</title>
    <script src="https://www.paypal.com/sdk/js?client-id=AZZmol0kpp7NEJjRcDJ7lbeexIZ3grt4oKTWrP1A0lhJVyzBm-k8WIUNQ9Dp9OGOPT3LdhZ4w7y3cj&currency=MXN"></script>
</head>
<body>
    
<div id= "paypal-button-container"></div>

<script>

paypal.Buttons({
   style:{
    color: 'blue',
    shape:'pill',
    label:'pay'


   },

   createOrder: function(data, actions) {
    return actions.orden.create({
            purchase_units:[{
                amount:{
                    value:100
                }
            }]

    });


   },

   onApprove: function (data, actions) {
    actions.order.capture().then(function(detalles){
       console.log(detalles);
    });
   },

   onCancel: function(data){

     alert("Pago cancelado")
   }

}).render('#paypal-button-container')

</script>
</body>
</html>