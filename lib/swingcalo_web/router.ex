defmodule SwingcaloWeb.Router do
  use SwingcaloWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SwingcaloWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/home", HomeController, :index
    get "/band", BandController, :index
    get "/shows", ShowsController, :index
    get "/media", MediaController, :index
    get "/calendar", CalendarController, :index
    get "/contact", ContactController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", SwingcaloWeb do
  #   pipe_through :api
  # end
end
