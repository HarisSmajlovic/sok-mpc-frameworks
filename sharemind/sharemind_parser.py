import sys

args = sys.argv[1:]

rootpath = args[0]
separator = ';'
exectime = 0

with open(f'{rootpath}/emulator_profile.csv') as f:
    next(f)  # skip header
    for line in f: exectime += int(line.split(separator)[3])

print(f'Time passed: {exectime}')
