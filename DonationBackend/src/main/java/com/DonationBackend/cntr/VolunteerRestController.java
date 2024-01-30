package com.DonationBackend.cntr;
import java.util.List;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.DonationBackend.model.*;
import com.DonationBackend.service.*;

@RestController
@CrossOrigin
public class VolunteerRestController {
	
	@Autowired
	private VolunteerService volunteerService;
	
	@Autowired
	private AdminService adminService;
	
	

    
	//adding volunteer to database
	@PostMapping("volunteerRegister")
	public String volunteerPost(@RequestBody Volunteer volunteer){
		if(adminService.doesEmailExist(volunteer.getVolunteerEmail())) {
			return "email id present";
		}
		else {
			volunteerService.add(volunteer);
			return "added success";
		}
	}
	
	//get list of volunteers
	@GetMapping(value = {"/listOfVolunteers"})
	public List<Volunteer> productList(){
		return volunteerService.getAll();
	}
	
//	@PostMapping(value= {"volunteerLogin"} )
//	public String volunteerLogin(@RequestBody Volunteer volunteerObj) {
//		
//		Volunteer volunteer=volunteerService.getByEmail(volunteerObj.getVolunteerEmail());
//		
//		if (volunteer != null) {
//			if(volunteer.getVolunteerPassword().equals(volunteerObj.getVolunteerPassword())) {
//					return "Successful Login";
//				}
//		}	
//		return "Invalid Login Credentials";	
//	}
	
	@GetMapping(value= {"/volunteerProfile/{volunteerId}"})
	public Volunteer getVolunteer(@PathVariable int volunteerId) {	
		Volunteer volunteer=volunteerService.getById(volunteerId);
		if (volunteer != null) {
			System.out.println(volunteer);
				return volunteer;
			}
		return null;
	}

	@PostMapping("volunteerUpdate")
	public String volunteerUpdate(@RequestBody Volunteer volunteer) {
		volunteerService.add(volunteer);
		return "Update SuccessFully";
	}
}
