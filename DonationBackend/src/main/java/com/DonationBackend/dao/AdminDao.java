package com.DonationBackend.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.DonationBackend.model.Admin;

@Repository
public interface AdminDao extends CrudRepository<Admin, String>{
	Optional<Admin> findByAdminEmail(String adminEmail);
}
