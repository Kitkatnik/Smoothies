class Level < ActiveRecord::Base
	has_many :recipes
	def name 
		"Level #{level}" 
	end
end
