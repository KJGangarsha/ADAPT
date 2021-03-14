<html>
<body>
<h2>Customer Operations</h2>
<form action = "add">
 Customer name: <input type ="text" name = "name"><br>
Customer Order: <input type ="text" name = "order"><br>
Customer bill: <input type ="text" name = "bill"><br>
<input type ="submit">
</form>
====================================================================================
<h2>Want to update the data?</h2>
<form action ="update">
Customer name: <input type = "text" name="name">
<input type = "submit" value = "update">
</form>
====================================================================================
<h2>Search for an user</h2>

<form action ="fetch">
Customer name:<input type = "text" name="name">
<input type = "submit" value = "search">
</form>
=====================================================================================
<h2>Want to see all users?</h2>

<form action ="fetchall">
Customer name: <input type = "submit" value = "Database">
</form>
======================================================================================
<h2>Delete an user</h2>
<form action ="delete">
Customer name:<input type = "text" name="name">
<input type = "submit" value = "delete">
</form>
</body>
</html>