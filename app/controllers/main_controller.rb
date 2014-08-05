class MainController < ApplicationController
  def index
  end

  def number
  	errorNumber = params[:errorNumber]
  	  varNum = errorNumber.chomp.to_i
  	  begin
	  	if varNum>5
	  	then varNum/1
	  	end
	  	if varNum<6
	  	then varNum/0
	 	end
  	  rescue => e
	  	(if varNum==4
	  		puts "OH NO! IT'S A FOUR!!! NOT A FOUR!!! AAAHHHH!"
	  		puts varNum
	  	end
	  	puts "Please pick a number above 5."
	  	puts ("Error: " + e.message))
	  else
	  	puts "Wow! no errors!"
	  	puts varNum
	  ensure
		p "All done!"
	end

  	testnumber = {errorNumber: errorNumber}
  	p testnumber

  	head :ok
  end

end
