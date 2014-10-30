class PagesController < ApplicationController
  def people
    @people = Person.all

    sleep 2
    render json: @people, root: "people"
  end

  def index
  end
end
