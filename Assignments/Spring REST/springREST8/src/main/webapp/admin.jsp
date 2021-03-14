<html>
<body>
<h2>Welcome Admin</h2>
<form action = "add">
 Customer name: <input type ="text" name = "name"><br>
order placed: <input type ="text" name = "order">
<input type ="submit" value="place order">
</form>
====================================================================================
<h2>Want to update the data?</h2>
<form action ="update">
update user:<input type = "text" name="name">
<input type = "submit" value = "update">
</form>
====================================================================================
<h2>Search for an user</h2>

<form action ="fetch">
user:<input type = "text" name="name">
<input type = "submit" value = "search">
</form>
=====================================================================================
<h2>Want to see all users?</h2>

<form action ="fetchall">
<input type = "submit" value = "Database">
</form>
======================================================================================
<h2>Delete an user</h2>
<form action ="delete">
update user:<input type = "text" name="name">
<input type = "submit" value = "delete">
</form>
</body>
</html>