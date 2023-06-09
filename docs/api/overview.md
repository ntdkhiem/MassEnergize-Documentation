# Overview

This page contains documentation regarding endpoints within MassEnergize's API.

Every endpoint returns an instance of [MassenergizeResponse()](global-variables#massenergizeresponse)

### Things I find frontend-portal uses that are useful for the app.
- API handles POST requests only.
- In each POST request, you must supply form data including "___token" field that used for authenticating the request.
- 

### Things I find confusing.
- Some arguments are inconsistent. For instance, `community_id` sometimes has a type of `str` and in other routes, it has a type of `int`.
- Some routes have unclear required arguments versus optional arguments.