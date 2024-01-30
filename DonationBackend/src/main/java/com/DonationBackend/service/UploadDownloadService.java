package com.DonationBackend.service;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


@Service
public class UploadDownloadService {
	private static final String path = "D:\\CDAC\\FinalProject\\imageUploadDirectory";
	
	public void uploadFile(MultipartFile file) throws Exception {
//		Recipient recipient=recipientService.getById(1);
		// Save file on system
		//file.getOriginalFilename()==filename
		if (!file.getOriginalFilename().isEmpty()) {		
			BufferedOutputStream outputStream = new BufferedOutputStream(
//					new FileOutputStream(new File(path, recipient.getRecipientRegistrationId())));
					new FileOutputStream(new File(path, file.getOriginalFilename())));
			outputStream.write(file.getBytes());
			outputStream.flush();
			outputStream.close();
			
			
		} else {
			throw new Exception();
		}

//		List<String> list = new ArrayList<String>();
//		File files = new File(path);
//		String[] fileList = ((File) files).list();
//		for (String name : fileList) {
//			list.add(name);
//		}
//
//		return list;
	}

	public List<String> getListofFiles() throws Exception {

		List<String> list = new ArrayList<String>();
		File files = new File(path);
		String[] fileList = files.list();
		for (String name : fileList) {
			list.add(name);
		}

		return list;
	}
}