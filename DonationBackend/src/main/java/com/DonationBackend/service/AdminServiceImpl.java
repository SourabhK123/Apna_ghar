package com.DonationBackend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DonationBackend.dao.AdminDao;
import com.DonationBackend.dao.DonorDao;
import com.DonationBackend.dao.RecipientDao;
import com.DonationBackend.dao.VolunteerDao;
import com.DonationBackend.model.Admin;
import com.DonationBackend.model.Donor;

@Service
public class AdminServiceImpl implements AdminService{

	@Autowired
	private AdminDao adminDao;  
	
	@Autowired
	private DonorDao donorDao;
	
	@Autowired
	private RecipientDao recipientDao ;
	
	@Autowired
	private VolunteerDao volunteerDao;
	
	@Override
	public Admin getById(String adminEmail) {
		
		Optional<Admin> opt = adminDao.findById(adminEmail);
		if(opt.isPresent())
			return opt.get();
		else
			return null;
	}
	
	@Override
    public Admin registerAdmin(Admin admin) {
        return adminDao.save(admin);
    }
	
	
	@Override
    public void add(Admin admin) {
        adminDao.save(admin);
    }
	 @Override
	    public Admin getByEmail(String email) {
	        Optional<Admin> optionalAdmin = adminDao.findById(email);
	        return optionalAdmin.orElse(null);
	    }
	
	// to check if registering email is already present
	@Override
	public boolean doesEmailExist(String email) {
		
		if(adminDao.findById(email).isPresent()) {
			return true;
		}
		else if(donorDao.selectByDonorEmail(email)!=null) {
			return true;
		}
		else if(recipientDao.selectByEmail(email)!=null) {
			return true;
		}
		else if(volunteerDao.selectByVolunteerEmail(email)!=null) {
			return true;
		}
		return false;
	}
}
