package com.DonationBackend.cntr;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.DonationBackend.model.DonationDetails;
import com.DonationBackend.model.Recipient;
import com.DonationBackend.service.AdminService;
import com.DonationBackend.service.RecipientService;

@RestController
@CrossOrigin
public class RecipientRestController {
	
	@Autowired
	private RecipientService recipientService;
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/recipientRegister")
	public String reciepientPost(@RequestBody Recipient recipient) {
		
		if(adminService.doesEmailExist(recipient.getRecipientEmail())) {
			return "email id present";
		}
		else {
			recipientService.add(recipient);
			return "added success";
		}
		
	}	
	
	//update the kyc status to true
	@PostMapping(value = {"/recipientApproval"})
	public void recipientKYCApproval(@RequestBody Recipient recipient) {
		
		recipientService.update(recipient);
	}
	
	//get single recipient based on login
	@GetMapping(value= {"/getRecipient/{recipientId}"})
	public Recipient recipientDetails(@PathVariable int recipientId){
		
		return recipientService.getById(recipientId);
	} 
	
	//get all recipients who have isKycVerified as false
	@GetMapping(value= {"/selectUnverifiedRecipients"})
	public List<Recipient> listOfUnverifiedRecipients(){
		
		return recipientService.getUnapprovedRecipients();
	} 
	
	//get all recipients who have isKycVerified as true
	@GetMapping(value= {"/selectVerifiedRecipients"})
	public List<Recipient> listOfVerifiedRecipients(){
		
		List<Recipient> list = recipientService.getApprovedRecipients();
		
		Collections.sort(list);
		
		return list;
	}
	
	@PostMapping(value = {"/updateDemands"})
	public void recipientUpdateDemands(@RequestBody Recipient recipient) {
		
		System.out.println(recipient);
		
		Recipient updateRecp = recipientService.getById(recipient.getRecipientId());	
		
		updateRecp.setRawFoodQuantityRequired(updateRecp.getRawFoodQuantityRequired() + recipient.getRawFoodQuantityRequired());
		updateRecp.setClothesQuantityRequired(updateRecp.getClothesQuantityRequired() + recipient.getClothesQuantityRequired());
		updateRecp.setStationaryQuantityRequired(updateRecp.getStationaryQuantityRequired()+ recipient.getStationaryQuantityRequired());
		
		System.out.println(updateRecp);
		
		recipientService.update(updateRecp);
	}
	
	//updateRecipientRecievedDonationDetails
	@PostMapping(value = {"/updateRecipientRecievedDonationDetails"})
	public void recipientUpdateDemands(@RequestBody DonationDetails donationDetails) {
		
		System.out.println(donationDetails);
		
		Recipient updateRecp  = donationDetails.getRecipient();	
		Recipient oldRecipient=recipientService.getById(updateRecp.getRecipientId());
		int updatedRawFood=updateRecp.getRawFoodQuantityRequired() + oldRecipient.getRawFoodQuantityReceived();
		updateRecp.setRawFoodQuantityReceived(updatedRawFood);
		updateRecp.setClothesQuantityReceived(updateRecp.getClothesQuantityRequired() + oldRecipient.getClothesQuantityReceived());
		updateRecp.setStationaryQuantityReceived(updateRecp.getStationaryQuantityRequired()+ oldRecipient.getStationaryQuantityReceived());
		
		System.out.println(updateRecp);
		
		recipientService.update(updateRecp);
	}
	
	//get all recipients 
	@GetMapping(value= {"/selectAllRecipients"})
	public List<Recipient> listOfAllRecipients(){
		
		return recipientService.getAll();
	} 
	
	//get rawFood received/required percentage 
	@GetMapping(value= {"/getRawFoodPercentage"})
	public int getRawFoodPercentage(){
		try {
			return (100*recipientService.getRawFoodQuantityReceivedSum())/recipientService.getRawFoodQuantityRequiredSum();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		
	}	
	
	//get clothes received/required percentage 
	@GetMapping(value= {"/getClothesPercentage"})
	public int getClothesPercentage(){
		try {
			return (100*recipientService.getClothesQuantityReceivedSum())/recipientService.getClothesQuantityRequiredSum();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		
	}	
	
	//get stationary received/required percentage 
	@GetMapping(value= {"/getStationaryPercentage"})
	public int getStationaryPercentage(){
		try {
			return (100*recipientService.getStationaryQuantityReceivedSum())/recipientService.getStationaryQuantityRequiredSum();
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		
	}
	
}
