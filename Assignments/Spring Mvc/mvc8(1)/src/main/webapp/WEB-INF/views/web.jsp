<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<a href="/mvcass8/login?lang=en">English</a>
<a href="/mvcass8/login?lang=fr">French</a>
<a href="/mvcass8/login?lang=vi">Vietnamese</a>
<form action="">

<table>
	<tr>
	<td><spring:message code="label.username"/></td>
	<td><input type="text" name="username"/></td>
	</tr>
	<tr>
	<td><spring:message code="label.password"/></td>
	<td><input type="password" name="password" /></td>
	</tr>
	<tr>
	<td><spring:message code="label.submit"/></td>
	<td><button type="submit"></button></td>
	</tr>
</table>

</form>
</body>
</html>