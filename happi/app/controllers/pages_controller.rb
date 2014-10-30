class PagesController < ApplicationController
  def people
    @people = Person.all

    render json: {people: @people }
  end
end
