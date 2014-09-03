<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Angular extends CI_Controller {

	public function index()
	{
		// load the data model
		$this->load->model('Angular_model');

		// run the method, like a boss
		$data = $this->Angular_model->pull_word();

		// tell the people
		echo $data;
	}
}

/* End of file angular.php */
/* Location: ./application/controllers/angular.php */