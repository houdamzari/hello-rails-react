Rails.application.routes.draw do
  root 'home#index'
  get '/random_greeting', to: 'greetings#random'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
