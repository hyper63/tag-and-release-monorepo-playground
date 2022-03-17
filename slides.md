---
marp: true
paginate: true
theme: uncover
class: invert
---

# **Tag And Release**
---

![bg right contain](https://avatars.githubusercontent.com/u/8246360?v=4)

Tyler
*Principal Software Engineer* @ hyper

---

## **Motivation**

At hyper, we have a couple different repo "types":

- single module node repo
- single module deno repo
- multiple module repo, with a combination of node and deno
  modules


---

Each of these modules could be:

- Application
  - needs to be deployed into an environment
- Library
  - needs to be published to registry
    - npm
    - deno.land
    - nest.land
    - all of the above

---

## **Already great tools!**

- lerna
- standard-version
- changesets

Avoiding direct dependency on node was desirable

---

## **What we wanted**

- consistent way to release
- no direct dependency on a particular runtime to release
- minimal knowledge of the codebase to release
  - Ideally, anyone who wants to release a module should not have to clone the
    repo the module resides in

---

They're all on Git and Github!

---

## Decisions

- Power deployments of any kind, off of Git `tags`
- Use a Github workflow to power all the steps of releasing:
  - bump manifest files
  - generate a changelog
  - create a git tag
  - push back to the repo
  - create a Github Release on the new tag

---

## **Tag And Release Workflow**

demo

---

### **FIN**