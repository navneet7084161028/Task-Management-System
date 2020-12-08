$(document).ready(function(){
    $("#add").click(function(){
        var sum = $("#display").val();
        
        $("ul").append("<li><input type='checkbox' id='mycheck'><label id='task-label'>"+sum+"</label>"+
            '<input type="text" id="edit-txt"/>'+
            '<input type="button" value="Edit" id="edit" />'+
            '<input type="button" value="Update" id="update" />'+
            '<input type="button" value="Delete" id="del"/>'+"</li>").css("color","white");
             $("#display").val('');
    }) 

       $("#ul").on('click', "#del", function(){
         $(this).parent().remove();
       })

       $("#ul").on('click', "#mycheck", function(){
         $(this).parent().appendTo("#ol");
       })

       $("#ol").on('click', "#mycheck", function(){
          $(this).parent().appendTo("#ul");
       })

       $("#ol").on('click', "#del", function(){
          $(this).parent().remove();
       })

       $("#ul").on('click','#edit' ,function(){
         var newVar = $(this).siblings('#task-label').html();
         $(this).siblings('#edit-txt').val(newVar);
       })

       $("#ol").on('click','#edit' ,function(){
         var newVar = $(this).siblings('#task-label').html();
         $(this).siblings('#edit-txt').val(newVar);
       })

       $("#ul").on('click', '#update', function(){
         var a = $(this).siblings('#edit-txt').val().trim();
         $(this).siblings('#task-label').html(a);
       })

       $("#ol").on('click', '#update', function(){
         var a = $(this).siblings('#edit-txt').val().trim();
         $(this).siblings('#task-label').html(a);
       })
})