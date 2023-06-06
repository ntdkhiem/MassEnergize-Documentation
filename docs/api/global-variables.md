---
title: Global Variables
---

# Global Variables

### MassenergizeResponse()

This class represents the standard response the API returns.

### Context()

This class contains info about a particular user and their request.

About the user:
- Are they logged in?
- Are they an admin? super admin? community admin?

About the request:
- args: the body/payload that was sent in the request
- dev? : also tells you if this request is coming from one of our dev sites

### Community()

- `community_id:int`
- `name:str`
- `subdomain:str`
- `owner_name:str`
- `owner_email:str`
- `owner_phone_number:str`
- `is_geographically_focused:bool`
- `is_demo:bool`
- `is_published:bool`
- `is_approved:bool`
- `image:str`
:::note
`image` will be replaced by `logo` behind the scene.
:::

TODO: Add fields to this class. Check the fields in the Database.
