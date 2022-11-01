#!/usr/bin/env bash
#
# BASH SLUGIFY
#
# AUTHOR: Brutus [DMC] <brutus.dmc@googlemail.com>
# LICENSE: GNU General Public License v3 or above -
#          http://www.opensource.org/licenses/gpl-3.0.html'
#
# ERROR CODES:
#
# 0: all went well
# 1: error parsing arguments
# 2: original string is empty
# 3: slugified string is empty
# 4: original file not found
# 5: slugified file exists

if [ "$(basename -- $0)" == "bash" ]; then
  MAIN=0
else
  MAIN=1
fi

VERSION='0.2.0'


### OPTIONS

# character options
TO_UPPERCASE=0
TO_LOWERCASE=0
REMOVE_SPECIAL_CHARS=0
REPLACE_SPECIAL_CHARS=0
REPLACE_ACCENT_CHARS=0

# space options
KEEP_DASHES=0
KEEP_UNDERSCORES=0
KEEP_DOTS=0
KEEP_SPACES_AROUND_DASHES=0
CONSOLIDATE_SPACES=1

# replacement options
SPACE_CHAR='-'
REPLACEMENT_CHAR='_'

# mode options
EXTEND=0
MOVE=0
IGNORE_EXT=0
DRY_RUN=0
FORCE=0

# other options
VERBOSE=0
DEBUG=0
PADDING=''


### ARGUMENTS

OPTS_STRING=':luxXEDUPASca:C:sernfvdh'
OPTION_STRING='[(l|u)|(x|X)|E|D|U|P|A|a|S|(c<char>|s)|C<char>|e|r|n|f|v|d|h]…'

DESCRIPTION='Slugifies strings or filenames.'
USAGE="usage: slugify ${OPTION_STRING} <string>…"

HELP="${DESCRIPTION}
${USAGE}
character options
  -l  convert to lowercase
  -u  convert to uppercase
  -x  remove special chars
  -X  replace special chars
  -E  don't slugify file extensions
  -a  replace accent
space options
  -D  don't convert dashes to spaces
  -U  don't convert underscores to spaces
  -P  don't convert dots (points) to spaces
  -A  don't remove spaces around dashes and underscores
  -S  don't consolidate multiple spaces
replacement options
  -c <char> replace all spaces with this (default: '-')
  -C <char> replace special chars with this (default: '_')
  -s use underscores for spaces (shortcut for '-c_')
mode options
  -e  extend — treat all arguments as one string and echo a slug for it
  -r  rename files – treat arguments as filenames and rename them
rename options
  -n  dry run — only show new file names (no renaming)
  -f  force — overwrite existing files
other options
  -v  verbose output
  -d  debug output
  -h  print help"


function print_usage(){
  echo "${USAGE}"
  exit ${1:-0}
}


function print_help(){
  echo "${HELP}"
  exit ${1:-0}
}


function print_options(){
  >&2 echo '# OPTIONS'
  >&2 echo '# ======='
  >&2 echo '#'
  >&2 echo '# [character options]'
  >&2 echo "# TO_UPPERCASE: ${TO_UPPERCASE}"
  >&2 echo "# TO_LOWERCASE: ${TO_LOWERCASE}"
  >&2 echo "# REMOVE_SPECIAL_CHARS: ${REMOVE_SPECIAL_CHARS}"
  >&2 echo "# REPLACE_SPECIAL_CHARS: ${REPLACE_SPECIAL_CHARS}"
  >&2 echo "# REPLACE_ACCENT_CHARS: ${REPLACE_ACCENT_CHARS}"
  >&2 echo '#'
  >&2 echo '# [space options]'
  >&2 echo "# KEEP_DASHES: ${KEEP_DASHES}"
  >&2 echo "# KEEP_UNDERSCORES: ${KEEP_UNDERSCORES}"
  >&2 echo "# KEEP_DOTS: ${KEEP_DOTS}"
  >&2 echo "# KEEP_SPACES_AROUND_DASHES: ${KEEP_SPACES_AROUND_DASHES}"
  >&2 echo "# CONSOLIDATE_SPACES: ${CONSOLIDATE_SPACES}"
  >&2 echo '#'
  >&2 echo '# [replacement options]'
  >&2 echo "# SPACE_CHAR: '${SPACE_CHAR}'"
  >&2 echo "# REPLACEMENT_CHAR: '${REPLACEMENT_CHAR}'"
  >&2 echo '#'
  >&2 echo '# [mode options]'
  >&2 echo "# EXTEND: ${EXTEND}"
  >&2 echo "# MOVE: ${MOVE}"
  >&2 echo "#"
  >&2 echo "# [rename options]"
  >&2 echo "# IGNORE_EXT: ${IGNORE_EXT}"
  >&2 echo "# DRY_RUN: ${DRY_RUN}"
  >&2 echo "# FORCE: ${FORCE}"
  >&2 echo '#'
  >&2 echo '# [other options]'
  >&2 echo "# VERBOSE: ${VERBOSE}"
  >&2 echo "# DEBUG: ${DEBUG}"
}


function get_arguments() {
  local set_space_char=0
  while getopts ${OPTS_STRING} opt "$@"; do
    case ${opt} in
      l)
        TO_LOWERCASE=1
        ;;
      u)
        TO_UPPERCASE=1
        ;;
      x)
        REMOVE_SPECIAL_CHARS=1
        ;;
      X)
        REPLACE_SPECIAL_CHARS=1
        ;;
      a)
        REPLACE_ACCENT_CHARS=1
        ;;
      D)
        KEEP_DASHES=1
        ;;
      U)
        KEEP_UNDERSCORES=1
        ;;
      P)
        KEEP_DOTS=1
        ;;
      A)
        KEEP_SPACES_AROUND_DASHES=1
        ;;
      S)
        CONSOLIDATE_SPACES=0
        ;;
      c)
        SPACE_CHAR=${OPTARG}
        set_space_char=$((${set_space_char} + 1))
        ;;
      C)
        REPLACEMENT_CHAR=${OPTARG}
        ;;
      s)
        SPACE_CHAR='_'
        set_space_char=$((${set_space_char} + 1))
        ;;
      e)
        EXTEND=1
        ;;
      r)
        MOVE=1
        ;;
      E)
        IGNORE_EXT=1
        ;;
      n)
        DRY_RUN=1
        ;;
      f)
        FORCE=1
        ;;
      v)
        VERBOSE=1
        PADDING='  '
        ;;
      d)
        DEBUG=1
        VERBOSE=1
        PADDING='  '
        ;;
      h)
        print_help
        ;;
      \?)
        echo "Invalid option: -${OPTARG}" >&2
        exit 1
        ;;
      :)
        echo "Option -${OPTARG} requires an argument." >&2
        exit 1
        ;;
    esac
  done
  # check args
  if [ ${TO_LOWERCASE} -eq 1 -a ${TO_UPPERCASE} -eq 1 ]; then
    echo "[ERROR] '-l' and '-u' can't be used together." >&2
    print_usage 1
  fi
  if [ ${REMOVE_SPECIAL_CHARS} -eq 1 -a ${REPLACE_SPECIAL_CHARS} -eq 1 ]; then
    echo "[ERROR] '-x' and '-X' can't be used together." >&2
    print_usage 1
  fi
  if [ ${set_space_char} -eq 2 ]; then
    echo "[ERROR] '-c' and '-s' can't be used together." >&2
    print_usage 1
  fi
  if [ $# -eq 0 ]; then
    echo "[ERROR] at least one argument is needed. Try '-h' for help." >&2
    echo >&2
    print_usage 1
  fi
}


### SLUGIFY

function slugify(){
  # echos the slugify version of all args consolidated

  local name="$@"
  local gluechars='-_. '
  local safechars="${gluechars}a-zA-Z0-9"

  if [ -z "${name}" ]; then
    echo "[ERROR] need a string to slugify."
    exit 2
  fi

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 1 (base)........: '${name}' (${#name})" >&2
  fi


  ## HANDLE CHARACTERS 1 (case)

  # convert to uppercase
  if [ ${TO_UPPERCASE} -eq 1 ]; then
    name=$(echo "${name}" | tr a-zäöü A-ZÄÖÜ)
  fi

  # convert to lowercase
  if [ ${TO_LOWERCASE} -eq 1 ]; then
    name=$(echo "${name}" | tr A-ZÄÖÜ a-zäöü)
  fi

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 2 (case)........: '${name}' (${#name})" >&2
  fi

  ## HANDLE CHARACTERS 2 (remove special chars)

  # remove special chars
  if [ ${REMOVE_SPECIAL_CHARS} -eq 1 ]; then
    name=$(echo "${name//[^${safechars}]/}")
  fi

  # replace accents
  if [ ${REPLACE_ACCENT_CHARS} -eq 1 ]; then
    name=$(echo "${name}" | iconv -f utf8 -t ascii//IGNORE)
  fi

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 3 (del x chars).: '${name}' (${#name})" >&2
  fi

  ## HANDLE SPACES 1 (remove dashes, dots and underscores)

  # remove dashes?
  if [ ${KEEP_DASHES} -eq 0 ]; then
    name=$(echo "${name//-/ }")
  fi

  # remove underscores?
  if [ ${KEEP_UNDERSCORES} -eq 0 ]; then
    name=$(echo "${name//_/ }")
  fi

  # remove dots?
  if [ ${KEEP_DOTS} -eq 0 ]; then
    name=$(echo "${name//./ }")
  fi

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 4 (cast space)..: '${name}' (${#name})" >&2
  fi

  ## HANDLE SPACES 2 (consolidate)

  # consolidate spaces
  if [ ${CONSOLIDATE_SPACES} -eq 1 ]; then
    name=$(echo "${name}" | tr -s '[:space:]')
  fi

  # keep spaces around dashes and underscores?
  if [ ${KEEP_SPACES_AROUND_DASHES} -eq 0 ]; then
    name=$(echo "${name// -/-}")
    name=$(echo "${name//- /-}")
    name=$(echo "${name// _/_}")
    name=$(echo "${name//_ /_}")
  fi

  # trim spaces

  name=$(echo "${name}" | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//')

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 5 (consolidate).: '${name}' (${#name})" >&2
  fi

  ## HANDLE CHARACTERS 3 (replace special chars)

  # replace special chars
  if [ ${REPLACE_SPECIAL_CHARS} -eq 1 ]; then
    name=$(echo "${name//[^${safechars}]/$REPLACEMENT_CHAR}")
  fi

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 6 (repl chars)..: '${name}' (${#name})" >&2
  fi

  ## REPLACE SPACES

  name=$(echo "${name// /$SPACE_CHAR}")

  if [ ${DEBUG} -eq 1 ]; then
    echo "# SLUG 7 (repl space)..: '${name}' (${#name})" >&2
  fi

  # return slug

  echo "${name}"
}


## RENAME

function rename(){
  # creates a newname with slugify and tries to rename the file

  ## GET PARTS

  local fullname="$@"

  # get filename
  local path="${fullname%/*}"
  local name="${fullname##*/}"
  local ext="${fullname##*.}"

  # check path
  if [ "${path}" == "${fullname}" ]; then
    path=''
  else
    path="${path}/"
  fi

  # check name
  name="${name%.*}"  # remove extension
  if [ -z "${name}" ]; then
    name=".${ext}"
    ext=''
  fi

  # check extension
  if [ ! -z "${ext}" ]; then
    if [ "${ext}" == "${fullname}" ]; then
      ext=''
    else
      ext=".${ext}"
    fi
  fi

  # debug output (name parts)
  if [ ${DEBUG} -eq 1 ]; then
    echo "# ${PADDING}org path: '${path}'"
    echo "# ${PADDING}org name: '${name}'"
    echo "# ${PADDING}org ext.: '${ext}'"
  fi

  ## BUILD NEW NAME

  local newname="$(slugify "${name}")"

  if [ ${IGNORE_EXT} -eq 0 ]; then
    if [ ! -z "${ext}" ]; then
      ext=".$(slugify "${ext}")"
    fi
  fi

  # debug output (new name)
  if [ ${DEBUG} -eq 1 ]; then
    echo "# ${PADDING}new path: '${path}'"
    echo "# ${PADDING}new name: '${newname}'"
    echo "# ${PADDING}new ext.: '${ext}'"
  fi

  # check newname
  if [ -z "${newname}" ]; then
    echo "${PADDING}[ERROR] '${name}' results in an empty string." >&2
    return 1
  fi

  # build new fullname
  local newfullname="${path}${newname}${ext}"

  ## RENAME

  if [ "${fullname}" != "${newfullname}" ]; then
    if [ ${DRY_RUN} -eq 0 ]; then
      # check if file exists
      if [ ! -f "${fullname}" ]; then
        echo "${PADDING}[WARNING] '${fullname}' not found." >&2
        return 4
      fi
      # rename file
      echo "${PADDING}${fullname} -> ${newfullname}"
      if [ -f "${newfullname}" ]; then
        echo "${PADDING}[WARNING] '${newfullname}' already exists." >&2
        if [ ${FORCE} -eq 0 ]; then
          return 5
        fi
      fi
      mv "${fullname}" "${newfullname}"
    else
      echo "${PADDING}${fullname} -> ${newfullname}"
    fi
  else
    echo "${PADDING}${fullname} -> skipped (no change)"
  fi
}


## MAIN

function main(){

  ## PARSE COMMANDLINE

  get_arguments "$@"
  shift $((OPTIND-1))

  # print verbose stuff
  if [ ${DEBUG} -eq 1 ]; then
    print_options
    echo "#" >&2
    echo "# ARGUMENTS" >&2
    echo "# =========" >&2
    for fn in "$@"; do
      echo "# - '$fn' (${#fn})" >&2
    done
  fi

  ## LOOP OVER ARGS

  if [ ${EXTEND} -eq 1 ]; then
    # return one slug for all arguments (consolidated)
    newname="$(slugify "$@")"
    echo "${newname}"
    if [ -z "${newname}" ]; then
      exit 3
    fi
  elif [ ${MOVE} -eq 1 ]; then
    # rename each file given as argument
    for string in "$@"; do
      if [ ${VERBOSE} -eq 1 ]; then
        echo "- ${string}"
      fi
      rename "${string}"
    done
  else
    # list slug for each file given as argument
    for string in "$@"; do
      if [ ${VERBOSE} -eq 1 ]; then
        echo "- ${string}"
      fi
      local slug=$(slugify "${string}")
      echo "${PADDING}${slug}"
    done
  fi
}


if [ ${MAIN} -eq 1 ]; then
  main "$@"
fi