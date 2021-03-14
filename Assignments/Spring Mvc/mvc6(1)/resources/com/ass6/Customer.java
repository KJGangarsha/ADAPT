package com.ass6;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class Customer {
	@NotEmpty
	@Size(min=8 , max=20 , message="Please enter the username between 8 and 20 characters")
	@Pattern(regexp="^[a-zA-z0-9]+$")
	public String username;
	@NotNull
	@Size(min=8 , max=20 , message="Please enter the username between 8 and 20 characters and contain one lowercase and one upper case and one special character")
	@Pattern(regexp="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,20}$/")
	public String password;
	@NotNull
	@Pattern(regexp="\"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$\"")
	public String email;
	@Contact
	public double contact;
	@NotBlank(message="City must be selected")
	public String city;
	@NotBlank(message="Zipcode can't be empty")

	@Pattern(regexp="\"^[0-9]{6}\"")
	public double zipcode;
	
	

	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getContact() {
		return contact;
	}
	public void setContact(double contact) {
		this.contact = contact;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public double getZipcode() {
		return zipcode;
	}
	public void setZipcode(double zipcode) {
		this.zipcode = zipcode;
	}
	
}
