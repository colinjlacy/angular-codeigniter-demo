<?php

// The Projects Model

class Angular_model extends CI_Model {

	var $word;

	function __construct()
	{
		// Call the Model constructor
		parent::__construct();
	}

	function pull_word()
	{
		$this->db->select('word');
		$this->db->from('words');
		$this->db->order_by('id', 'RANDOM');
		$this->db->limit(1);
		return $this->db->get()->row()->word;
	}

}

/* End of file stored_projects.php */
/* Location: ./server/application/models/stored_projects.php */