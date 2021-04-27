package com.ganga.guestboot.controller;

import com.ganga.guestboot.exception.ResourceNotFoundException;
import com.ganga.guestboot.model.Guest;
import com.ganga.guestboot.repository.GuestRepository;
import com.ganga.guestboot.service.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;

/*Cross-Origin is a security concept that allows restricting the resources implemented.
 It prevents the JavaScript code producing or consuming the requests against different origin.*/
@CrossOrigin(origins = "http://localhost:3000")

/*This takes care of mapping request data to the defined request handler method*/
@RestController

/*This annotation maps HTTP requests to handler methods of this controller*/
@RequestMapping("/api")
public class GuestController {
    /*Enables you to inject the object dependency implicitly*/
    @Autowired
    private GuestRepository repository;

    @Autowired
    private SequenceGeneratorService service;

    /*Handles the HTTP POST request matched with given URI expression*/
    @PostMapping("/addGuest")

    /*Method to create a new guest*/

    /*@Request body enables automatic deserialization of the inbound HttpRequest body onto a Java object*/
    public String addGuest(@RequestBody Guest guest){

        /*Setting Id by sequence generator*/
        guest.setGuestId(service.getSequenceNum(Guest.sequenceName));

        /*inserting guest model variables into collection*/
        repository.insert(guest);

        /*displays guest added*/
        return "Guest Added with Id: " +guest.getGuestId()+ " in room: "+guest.getRoomNumber();
    }

    /*Handles the HTTP PUT request matched with given URI expression*/
    @PutMapping("/editGuest/{guestId}")

    /*Method to update a specified guest provided with guest Id*/
    public ResponseEntity<Guest> updateGuest(@PathVariable int guestId,
                                               @Validated @RequestBody Guest guestDetails) throws ResourceNotFoundException {
        /*exception handling if id not found*/
        Guest guest = repository.findById(guestId)
                .orElseThrow(() -> new ResourceNotFoundException("Guest not found for this id : " +guestId));

        /*if id is found updating old with new */
        guest.setGuestName(guestDetails.getGuestName());
        guest.setGuestGender(guestDetails.getGuestGender());
        guest.setGuestContact(guestDetails.getGuestContact());
        guest.setGuestMailId(guestDetails.getGuestMailId());
        guest.setRoomNumber(guestDetails.getRoomNumber());
        guest.setNumberOfPeople(guestDetails.getNumberOfPeople());

        final Guest updatedGuest = repository.save(guest);
        return ResponseEntity.ok(updatedGuest);
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findGuests")

    /*Method to find all guests */
    public List<Guest> getGuests(){

        return repository.findAll();
    }

    /*Handles the HTTP GET request matched with given URI expression*/
    @GetMapping("/findGuest/{guestId}")

    /*Method to find a specified guest details provided with guest Id*/
    public ResponseEntity<Guest> getGuest(@PathVariable int guestId)throws ResourceNotFoundException {
        Guest guest=repository.findById(guestId).orElseThrow(()-> new ResourceNotFoundException("Guest Not Found with id: "+guestId));
        return ResponseEntity.ok().body(guest);
    }

    /*Handles the HTTP DELETE request matched with given URI expression*/
    @DeleteMapping("/deleteGuest/{guestId}")

    /*Method to delete a guest by providing guest Id*/
    public String deleteGuest(@PathVariable int guestId)
            throws ResourceAccessException, ResourceNotFoundException {
        Guest guest = repository.findById(guestId)
                .orElseThrow(() -> new ResourceNotFoundException("Guest not found for this id : " + guestId));

        repository.delete(guest);
        return "Deleted with id: "+guestId;
    }

}