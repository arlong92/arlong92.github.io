Rails.application.routes.draw do
  get 'arlong92.github.io/brave_transit' => 'locations#new'

  resources :locations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
