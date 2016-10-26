package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Usuario;
import com.example.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	UsuarioRepository usuarioRepository;

	public Usuario buscarPorNome(String nome) {
		
		return usuarioRepository.buscarPorNome(nome);
	}
	
	
	public Usuario cadastrar(Usuario usuario) {
		
		return usuarioRepository.save(usuario);
	}
	
	
}
