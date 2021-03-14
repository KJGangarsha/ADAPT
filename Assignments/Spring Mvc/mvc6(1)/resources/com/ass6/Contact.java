package com.ass6;

import java.lang.annotation.ElementType;  
import java.lang.annotation.Retention;  
import java.lang.annotation.RetentionPolicy;  
import java.lang.annotation.Target;

import javax.validation.Constraint;  
import javax.validation.Payload;  

@Constraint(validatedBy = ContactConstraintValidator.class)
@Target( {ElementType.FIELD } )  
@Retention(RetentionPolicy.RUNTIME)  
public @interface Contact {
	  
    public String message() default "Contact should only be Numeric contains 10 digits";  
    
    public Class<?>[] groups() default {};  
  
    public Class<? extends Payload>[] payload() default {};  

}
