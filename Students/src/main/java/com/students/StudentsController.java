package com.students;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentsController 
{
	@Autowired
	private StudentsRepository repo;
	
	@PostMapping("/add")
	private Students addDetail(@RequestBody Students stu)
	{
		return repo.save(stu);
	}
	
	@GetMapping("/get/{id}")
	private Optional<Students> findbyId(@PathVariable Long id)
	{
		Optional<Students> stu=repo.findById(id);	
		return stu;
	}
	
	@GetMapping("/getall")
	private List<Students> findAll()
	{
		return repo.findAll();	
	}
	
	@PutMapping("/update")
	private Students updateDetail(@RequestBody Students stu)
	{
		return repo.save(stu);
	}
	
	@DeleteMapping("/delete/{id}")
	private void deleteStudent(@PathVariable Long id)
	{
		repo.deleteById(id);
	}
	
	
}
