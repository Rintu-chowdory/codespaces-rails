Rails.application.configure do
  config.cache_classes = true
  config.eager_load = true
  config.consider_all_requests_local = false
  config.log_level = :info
  config.log_tags = [:request_id]
  config.force_ssl = true

  # Render/Railway set this so Rails knows its own hostname is allowed.
  config.hosts << ENV["RENDER_EXTERNAL_HOSTNAME"] if ENV["RENDER_EXTERNAL_HOSTNAME"]
  config.hosts << ENV["RAILWAY_PUBLIC_DOMAIN"] if ENV["RAILWAY_PUBLIC_DOMAIN"]
end
