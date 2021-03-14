package com.newAdmin;

import java.util.ArrayList;

import org.bson.Document;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

@Controller
public class AdminController {
	 MongoClient mongo =  new MongoClient("localhost",27017);
     MongoDatabase database = mongo.getDatabase("admin_order");
     MongoCollection<Document> doc =database.getCollection("orders");
  
    Document document;
     @RequestMapping("/add")
     public ModelAndView addOrder(@RequestParam("name") String n , @RequestParam("order") String o) {
    	 Document document = new Document(); 
     ModelAndView mv = new ModelAndView();
     document.append("name", n);
      document.append("order", o);
      doc.insertOne(document);
      mv.setViewName("place.jsp");
      return mv;
    }
     @RequestMapping("/delete")
     public ModelAndView deleteOrder(@RequestParam("name") String n) {
    	ModelAndView mv = new ModelAndView() ;
    	doc.deleteOne(Filters.eq("name", n));
    	mv.setViewName("delete.jsp");
    	 return mv;}
     @RequestMapping("/fetchall")
     @ResponseBody
     public ArrayList<Document> showDb() {
    	 ArrayList<Document>l = new ArrayList();
    	 l.add(document);
    	 return l;
     }
     @RequestMapping("/fetch")
     @ResponseBody
     public ArrayList<FindIterable<Document>> fetchUser(@RequestParam("name") String n) {
    	 ArrayList<FindIterable<Document>>l = new ArrayList();
    	   l.add(doc.find(Filters.eq("name",n)));
    	 return l;
     }
     
}
