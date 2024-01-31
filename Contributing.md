> This document outlines the conventions for writing code comments and formatting commits in this project.

# Code Comments Conventions (CCC! Hehehe...)

## Guidelines

- Comments should only provide information or context that is not immediately evident from the code.
- They should not be a catch-all alternative to clean code - code should be as self-explanatory as possible!

## Tag Format

- `XXX(Sin):` - This needs immediate attention; expect this commit to be amended shortly or a fast-follow commit to address this. Do not merge pull request with such comments still in them.
- `FIXME:`- This should be fixed ASAP, ideally within the feature being developed - create corresponding ticket and link ticket number in the comment as proof. Make sure the comment can still be understood if the ticket is moved or deleted.
- `TODO:` - This should be done when there is time - create corresponding ticket just like for `FIXME`s.
- `HACK:` - This is an acceptable hacky work-around, though there is no plan to fix this unless this is coupled with a FIXME tag.v
- `NOTE:` - This provides additional context that the code may not be able to clearly and concisely provide - typically, this includes findings, references, or decisions rather than code explanation.

# Commits Conventions (CC)

## Guidelines

- Given that our memory is fallible, our commits should help us retain the useful information.
- A clear and concise commit format is also useful for commit manipulation (reverting, cherry-picking, reordering, editing, etc.)

## Commit format

### Subject line

- This should be prefixed with a tag, inspired by the ones from [Angular conventions](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
  - `chore` Updates that don't affect the app's functionality (e.g. dependencies, scripts, dead code removal)
  - `devops` Changes to the CI/CD pipelines, build process, etc.
  - `docs` - Changes to in-repo documentation (e.g. documentation files, in-line comments)
  - `feat` - Addition or improvement of a feature in the app
  - `refactor` - Code changes that do not (should not) change the functionality or the app
  - `setup` - Setup and configuration
- The subject caption should start with a verb and not be capitalized.
- Conventionally, git subject lines should not exceed 52 characters. However, given our use of a prefix tag, we shall push that limit up to 72 characters.

### Body (optional)

- This is separate from the subject line _after leaving a blank line_
- This could include:
  - The work that was done in this commit
  - Additional context (e.g. findings, references, or decisions)
  - Other work this might be related to
- Use bulleted lists for clarity
- Given that we bumped the character limit to 72 for the subject line, we will also bump the body character limit from 72 to 80.
