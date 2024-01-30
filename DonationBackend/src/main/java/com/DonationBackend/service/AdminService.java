package com.DonationBackend.service;

import com.DonationBackend.model.Admin;

public interface AdminService {
	
	public Admin  getById(String adminEmail);

	boolean doesEmailExist(String email);

	void add(Admin admin);

	public Admin getByEmail(String email);
	 Admin registerAdmin(Admin admin);
	
}
