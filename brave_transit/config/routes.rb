Rails.application.routes.draw do
  get 'https://arlong92.github.io/brave_transit.html' => 'locations#new'

  resources :locations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
