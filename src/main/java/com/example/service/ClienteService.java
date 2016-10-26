package com.example.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Cliente;
import com.example.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository;
	
	/*private Map<Integer, Cliente> clientes=new HashMap<>();
	private Integer proximoId=1;*/
	
	public Cliente cadastrar(Cliente cliente){
		
		/*cliente.setId(proximoId);
		proximoId++;
		clientes.put(cliente.getId(), cliente);
		return cliente;*/
		return clienteRepository.save(cliente);
		
	}
	
	public Collection<Cliente> buscarTodos(){
		//return clientes.values();
		return clienteRepository.findAll();
	}
	public void excluir(Cliente cliente){
		//clientes.remove(cliente.getId());
		clienteRepository.delete(cliente);
	}
	public Cliente buscarPorId(Integer id) {
		// TODO Auto-generated method stub
		//return clientes.get(id);
		return clienteRepository.findOne(id);
	}
	public Cliente alterar(Cliente cliente){
		/*clientes.put(cliente.getId(), cliente);
		return cliente;*/
		return clienteRepository.save(cliente);
	}
}
