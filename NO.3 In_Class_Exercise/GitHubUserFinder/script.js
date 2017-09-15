function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var a = new XMLHttpRequest();
    a.open('GET',"https://api.github.com/users/"+user,false);
    a.send();
    return a;
}

function showUser(user) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $('#profile h2').html("username:"+user.login);
    $('#profile .userid').html("userid:"+user.id);
    $('#profile .avatar').html("<img src=https://avatars0.githubusercontent.com/u/"+user.id+"?v=4?s=220/>");
    $('#profile .information').html("<a href='https://github.com/"+user.login+"'>Visit this gay Now!</a>");
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    username=user.id;

}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            alert("No such person! Try again.")
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
