# Tag and Release Monorepo Playground

This repo demonstrates the `tag-and-release` dispatch workflow using the
`hyper-ci-bump` Github Action.

## Motivation

At hyper, we have a couple different repos:

- single module node repo (ie. node quickstarts)
- single module deno repo (ie. hyper adapters, deno quickstarts)
- multiple module repo, aka monorepo, with a combination of node and deno
  modules (ie. hyper core monorepo)

Each of these modules could an application to be deployed, or a library to be
published. Then depending on the runtime the registry to publish to is different
`npm` for `node` and `nest.land` and `deno.land` for `deno`. Some libs are
hybrid modules that are published to `npm` `nest.land` and `deno.land`.

We wanted a consistent way of releasing any of these modules, in any repo
configuration, and with any runtime. Since deployment could mean different
things for different modules, we wanted deployment separate from releasing.

We have experience with tools like `lerna` and `standard-version`, but using
these directly would require a direct dependency on `node` and `npm`. This was
not desirable, especially because much of the hyper code base runs on `deno` and
it doesn't make sense for our `deno` projects to have a direct dependency on
`node`.

So what did we want:

- consistent way to release
- no direct dependency on a runtime to release
- minimal knowledge of the codebase to release
  - Ideally, anyone who wantd to release a module should not have to clone the
    repo the module resides in

We took a step back to consider what all these repos had in common: they're all
on Git and Github! We love Github workflows.

So what we decided was this:

- Power deployments or any kind, off of Git tags
- Use a Github workflow to power all the steps of releasing:
  - bump manifest files
  - generate a changelog
  - create a git tag
  - push back to the repo
  - create a Github Release on the new tag

The result was the `Tag And Release` Dispatch Workflow, using the
`hyper-ci-bump` Github action
