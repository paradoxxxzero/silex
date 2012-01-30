(function() {
  var icons;

  icons = {
    play: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAJ42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4yLjItYzA2MyA1My4zNTI2MjQsIDIwMDgvMDcvMzAtMTg6MTI6MTggICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTAtMDEtMDEiCiAgIHBob3Rvc2hvcDpDcmVkaXQ9Ind3dy5nZW50bGVmYWNlLmNvbSIKICAgcGhvdG9zaG9wOkF1dGhvcnNQb3NpdGlvbj0iQXJ0IERpcmVjdG9yIgogICBJcHRjNHhtcENvcmU6SW50ZWxsZWN0dWFsR2VucmU9InBpY3RvZ3JhbSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxMC0wMS0wM1QyMTozOTo0MCswMTowMCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBREY5RjYxREE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBREY5RjYxREE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFERjlGNjFEQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIj4KICAgPElwdGM0eG1wQ29yZTpDcmVhdG9yQ29udGFjdEluZm8KICAgIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlByYWd1ZSIKICAgIElwdGM0eG1wQ29yZTpDaUFkclBjb2RlPSIxNjAwMCIKICAgIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkN6ZWNoIFJlcHVibGljIgogICAgSXB0YzR4bXBDb3JlOkNpRW1haWxXb3JrPSJrYUBnZW50bGVmYWNlLmNvbSIKICAgIElwdGM0eG1wQ29yZTpDaVVybFdvcms9Ind3dy5nZW50bGVmYWNlLmNvbSIvPgogICA8ZGM6cmlnaHRzPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6cmlnaHRzPgogICA8ZGM6Y3JlYXRvcj4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGk+QWxleGFuZGVyIEtpc2VsZXY8L3JkZjpsaT4KICAgIDwvcmRmOlNlcT4KICAgPC9kYzpjcmVhdG9yPgogICA8ZGM6ZGVzY3JpcHRpb24+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6ZGVzY3JpcHRpb24+CiAgIDxkYzpzdWJqZWN0PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT5pY29uPC9yZGY6bGk+CiAgICAgPHJkZjpsaT5waWN0b2dyYW08L3JkZjpsaT4KICAgIDwvcmRmOkJhZz4KICAgPC9kYzpzdWJqZWN0PgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbiBzZXQ8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcFJpZ2h0czpVc2FnZVRlcm1zPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwveG1wUmlnaHRzOlVzYWdlVGVybXM+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkFERjlGNjFEQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIgogICAgICBzdEV2dDp3aGVuPSIyMDEwLTAxLTAzVDIxOjM5OjQwKzAxOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/PspUY9oAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAPHRFWHRBTFRUYWcAVGhpcyBpcyB0aGUgaWNvbiBmcm9tIEdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbnMgc2V0LiDYa+jEAAAAH3RFWHRDb3B5cmlnaHQAUk9ZQUxUWSBGUkVFIExJQ0VOU0Ug3tmLaQAAAEVpVFh0RGVzY3JpcHRpb24AAAAAAFRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gvBH4GgAAACNpVFh0Q29weXJpZ2h0AAAAAABST1lBTFRZIEZSRUUgTElDRU5TRSAnXQpKAAAAt0lEQVR42mJgGFTg379/7//+/TsfiOXJMuDXr1//Yfjnz5/1QMxPkgHfv3//j4bff/v2LR6fHkZkzufPn//jUHfh////BXx8fAfxGvDhw4f/+GwDGnIASCUICgo+hImxICv48+cPIV86APECIHYkywBGRsYDQJyALIZiADD6cOm9ANRYICUlhREGhFzwAaRRTk5uIS6TcboAqLEBiCfIy8t/xOctdBeAbNwA0qyiovKQYWQAgAADAMwwZAzipUm4AAAAAElFTkSuQmCC',
    pause: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAJ42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4yLjItYzA2MyA1My4zNTI2MjQsIDIwMDgvMDcvMzAtMTg6MTI6MTggICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTAtMDEtMDEiCiAgIHBob3Rvc2hvcDpDcmVkaXQ9Ind3dy5nZW50bGVmYWNlLmNvbSIKICAgcGhvdG9zaG9wOkF1dGhvcnNQb3NpdGlvbj0iQXJ0IERpcmVjdG9yIgogICBJcHRjNHhtcENvcmU6SW50ZWxsZWN0dWFsR2VucmU9InBpY3RvZ3JhbSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxMC0wMS0wM1QyMTozOTo0MCswMTowMCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRUY5RjYxREE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRUY5RjYxREE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkFFRjlGNjFEQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIj4KICAgPElwdGM0eG1wQ29yZTpDcmVhdG9yQ29udGFjdEluZm8KICAgIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlByYWd1ZSIKICAgIElwdGM0eG1wQ29yZTpDaUFkclBjb2RlPSIxNjAwMCIKICAgIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkN6ZWNoIFJlcHVibGljIgogICAgSXB0YzR4bXBDb3JlOkNpRW1haWxXb3JrPSJrYUBnZW50bGVmYWNlLmNvbSIKICAgIElwdGM0eG1wQ29yZTpDaVVybFdvcms9Ind3dy5nZW50bGVmYWNlLmNvbSIvPgogICA8ZGM6cmlnaHRzPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6cmlnaHRzPgogICA8ZGM6Y3JlYXRvcj4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGk+QWxleGFuZGVyIEtpc2VsZXY8L3JkZjpsaT4KICAgIDwvcmRmOlNlcT4KICAgPC9kYzpjcmVhdG9yPgogICA8ZGM6ZGVzY3JpcHRpb24+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6ZGVzY3JpcHRpb24+CiAgIDxkYzpzdWJqZWN0PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT5pY29uPC9yZGY6bGk+CiAgICAgPHJkZjpsaT5waWN0b2dyYW08L3JkZjpsaT4KICAgIDwvcmRmOkJhZz4KICAgPC9kYzpzdWJqZWN0PgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbiBzZXQ8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcFJpZ2h0czpVc2FnZVRlcm1zPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwveG1wUmlnaHRzOlVzYWdlVGVybXM+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFRjlGNjFEQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIgogICAgICBzdEV2dDp3aGVuPSIyMDEwLTAxLTAzVDIxOjM5OjQwKzAxOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/Pnh5P6YAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAPHRFWHRBTFRUYWcAVGhpcyBpcyB0aGUgaWNvbiBmcm9tIEdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbnMgc2V0LiDYa+jEAAAAH3RFWHRDb3B5cmlnaHQAUk9ZQUxUWSBGUkVFIExJQ0VOU0Ug3tmLaQAAAEVpVFh0RGVzY3JpcHRpb24AAAAAAFRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gvBH4GgAAACNpVFh0Q29weXJpZ2h0AAAAAABST1lBTFRZIEZSRUUgTElDRU5TRSAnXQpKAAAAO0lEQVR42mJgGPKAEZnz9+/f/8h8ZmZmRkJyLMiCf/78wWkTLjkWNBfgNACXHHVdMGrAAMXCMAAAAQYAGq09WqnEc64AAAAASUVORK5CYII=',
    next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAJ42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4yLjItYzA2MyA1My4zNTI2MjQsIDIwMDgvMDcvMzAtMTg6MTI6MTggICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTAtMDEtMDEiCiAgIHBob3Rvc2hvcDpDcmVkaXQ9Ind3dy5nZW50bGVmYWNlLmNvbSIKICAgcGhvdG9zaG9wOkF1dGhvcnNQb3NpdGlvbj0iQXJ0IERpcmVjdG9yIgogICBJcHRjNHhtcENvcmU6SW50ZWxsZWN0dWFsR2VucmU9InBpY3RvZ3JhbSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxMC0wMS0wM1QyMTozOTo0MSswMTowMCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDRDOEIxRUE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RDRDOEIxRUE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlENEM4QjFFQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIj4KICAgPElwdGM0eG1wQ29yZTpDcmVhdG9yQ29udGFjdEluZm8KICAgIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlByYWd1ZSIKICAgIElwdGM0eG1wQ29yZTpDaUFkclBjb2RlPSIxNjAwMCIKICAgIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkN6ZWNoIFJlcHVibGljIgogICAgSXB0YzR4bXBDb3JlOkNpRW1haWxXb3JrPSJrYUBnZW50bGVmYWNlLmNvbSIKICAgIElwdGM0eG1wQ29yZTpDaVVybFdvcms9Ind3dy5nZW50bGVmYWNlLmNvbSIvPgogICA8ZGM6cmlnaHRzPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6cmlnaHRzPgogICA8ZGM6Y3JlYXRvcj4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGk+QWxleGFuZGVyIEtpc2VsZXY8L3JkZjpsaT4KICAgIDwvcmRmOlNlcT4KICAgPC9kYzpjcmVhdG9yPgogICA8ZGM6ZGVzY3JpcHRpb24+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6ZGVzY3JpcHRpb24+CiAgIDxkYzpzdWJqZWN0PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT5pY29uPC9yZGY6bGk+CiAgICAgPHJkZjpsaT5waWN0b2dyYW08L3JkZjpsaT4KICAgIDwvcmRmOkJhZz4KICAgPC9kYzpzdWJqZWN0PgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbiBzZXQ8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcFJpZ2h0czpVc2FnZVRlcm1zPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwveG1wUmlnaHRzOlVzYWdlVGVybXM+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlENEM4QjFFQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIgogICAgICBzdEV2dDp3aGVuPSIyMDEwLTAxLTAzVDIxOjM5OjQxKzAxOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/Pk4La+kAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAPHRFWHRBTFRUYWcAVGhpcyBpcyB0aGUgaWNvbiBmcm9tIEdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbnMgc2V0LiDYa+jEAAAAH3RFWHRDb3B5cmlnaHQAUk9ZQUxUWSBGUkVFIExJQ0VOU0Ug3tmLaQAAAEVpVFh0RGVzY3JpcHRpb24AAAAAAFRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gvBH4GgAAACNpVFh0Q29weXJpZ2h0AAAAAABST1lBTFRZIEZSRUUgTElDRU5TRSAnXQpKAAAAsUlEQVR42mJgGBLg379////+/RtPtgG/f//+D8K/fv0iz5AfP378h+Hv37+jGMJISPOXL1/4GRkZPyCL/f//P4GHh2ch2IBPnz79J8dVIEP4+fkXMr5///4/uWEDMoQFGLqURBBlBgDDZgLZBgA1J0hKSm5kAfrDAMgXIJCQDqBrlpGRWUhUNILAgwcP/iNrlpeXXwjjsxBjAMybIM1KSkoLkeWYiDUA6A0MzVQBAAEGAPVIXPh1z8pRAAAAAElFTkSuQmCC',
    prev: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAJ42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4yLjItYzA2MyA1My4zNTI2MjQsIDIwMDgvMDcvMzAtMTg6MTI6MTggICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTAtMDEtMDEiCiAgIHBob3Rvc2hvcDpDcmVkaXQ9Ind3dy5nZW50bGVmYWNlLmNvbSIKICAgcGhvdG9zaG9wOkF1dGhvcnNQb3NpdGlvbj0iQXJ0IERpcmVjdG9yIgogICBJcHRjNHhtcENvcmU6SW50ZWxsZWN0dWFsR2VucmU9InBpY3RvZ3JhbSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxMC0wMS0wM1QyMTozOTo0MSswMTowMCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RjRDOEIxRUE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RjRDOEIxRUE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjlGNEM4QjFFQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIj4KICAgPElwdGM0eG1wQ29yZTpDcmVhdG9yQ29udGFjdEluZm8KICAgIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlByYWd1ZSIKICAgIElwdGM0eG1wQ29yZTpDaUFkclBjb2RlPSIxNjAwMCIKICAgIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkN6ZWNoIFJlcHVibGljIgogICAgSXB0YzR4bXBDb3JlOkNpRW1haWxXb3JrPSJrYUBnZW50bGVmYWNlLmNvbSIKICAgIElwdGM0eG1wQ29yZTpDaVVybFdvcms9Ind3dy5nZW50bGVmYWNlLmNvbSIvPgogICA8ZGM6cmlnaHRzPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6cmlnaHRzPgogICA8ZGM6Y3JlYXRvcj4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGk+QWxleGFuZGVyIEtpc2VsZXY8L3JkZjpsaT4KICAgIDwvcmRmOlNlcT4KICAgPC9kYzpjcmVhdG9yPgogICA8ZGM6ZGVzY3JpcHRpb24+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6ZGVzY3JpcHRpb24+CiAgIDxkYzpzdWJqZWN0PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT5pY29uPC9yZGY6bGk+CiAgICAgPHJkZjpsaT5waWN0b2dyYW08L3JkZjpsaT4KICAgIDwvcmRmOkJhZz4KICAgPC9kYzpzdWJqZWN0PgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbiBzZXQ8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcFJpZ2h0czpVc2FnZVRlcm1zPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwveG1wUmlnaHRzOlVzYWdlVGVybXM+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlGNEM4QjFFQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIgogICAgICBzdEV2dDp3aGVuPSIyMDEwLTAxLTAzVDIxOjM5OjQxKzAxOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/PvEg1VAAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAPHRFWHRBTFRUYWcAVGhpcyBpcyB0aGUgaWNvbiBmcm9tIEdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbnMgc2V0LiDYa+jEAAAAH3RFWHRDb3B5cmlnaHQAUk9ZQUxUWSBGUkVFIExJQ0VOU0Ug3tmLaQAAAEVpVFh0RGVzY3JpcHRpb24AAAAAAFRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gvBH4GgAAACNpVFh0Q29weXJpZ2h0AAAAAABST1lBTFRZIEZSRUUgTElDRU5TRSAnXQpKAAAArElEQVR42sySUQoCIRCGV9lHH7rBiifpJnY0u1mC4JsgCIqipsGGtQ+aQfTDgKP8HzPjLMtfKsZIU0p5yuy9pyGEXONjs7WWOufyHiMesB+MMRQAwNrHnPMJIaS7AK31wTyqVSlVB8ZmB74W8+WbH6sAVno9zwIeM5BS0gJh04AqIcQBAiHsVXYDbcY5f4FgjEGvAtgm27Zd61DLKtd1HmoBvl8QQp6Qn+guwAA2xmVx1njQewAAAABJRU5ErkJggg==',
    grid: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAJ42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNC4yLjItYzA2MyA1My4zNTI2MjQsIDIwMDgvMDcvMzAtMTg6MTI6MTggICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICBwaG90b3Nob3A6RGF0ZUNyZWF0ZWQ9IjIwMTAtMDEtMDEiCiAgIHBob3Rvc2hvcDpDcmVkaXQ9Ind3dy5nZW50bGVmYWNlLmNvbSIKICAgcGhvdG9zaG9wOkF1dGhvcnNQb3NpdGlvbj0iQXJ0IERpcmVjdG9yIgogICBJcHRjNHhtcENvcmU6SW50ZWxsZWN0dWFsR2VucmU9InBpY3RvZ3JhbSIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxMC0wMS0wM1QyMTozOTo0MSswMTowMCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Mjc5OUIxRUE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Mjc5OUIxRUE4RjhERTExODIxQ0U0QjJDN0UzNkQ3MCIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcyNzk5QjFFQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIj4KICAgPElwdGM0eG1wQ29yZTpDcmVhdG9yQ29udGFjdEluZm8KICAgIElwdGM0eG1wQ29yZTpDaUFkckNpdHk9IlByYWd1ZSIKICAgIElwdGM0eG1wQ29yZTpDaUFkclBjb2RlPSIxNjAwMCIKICAgIElwdGM0eG1wQ29yZTpDaUFkckN0cnk9IkN6ZWNoIFJlcHVibGljIgogICAgSXB0YzR4bXBDb3JlOkNpRW1haWxXb3JrPSJrYUBnZW50bGVmYWNlLmNvbSIKICAgIElwdGM0eG1wQ29yZTpDaVVybFdvcms9Ind3dy5nZW50bGVmYWNlLmNvbSIvPgogICA8ZGM6cmlnaHRzPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6cmlnaHRzPgogICA8ZGM6Y3JlYXRvcj4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGk+QWxleGFuZGVyIEtpc2VsZXY8L3JkZjpsaT4KICAgIDwvcmRmOlNlcT4KICAgPC9kYzpjcmVhdG9yPgogICA8ZGM6ZGVzY3JpcHRpb24+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwvZGM6ZGVzY3JpcHRpb24+CiAgIDxkYzpzdWJqZWN0PgogICAgPHJkZjpCYWc+CiAgICAgPHJkZjpsaT5pY29uPC9yZGY6bGk+CiAgICAgPHJkZjpsaT5waWN0b2dyYW08L3JkZjpsaT4KICAgIDwvcmRmOkJhZz4KICAgPC9kYzpzdWJqZWN0PgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbiBzZXQ8L3JkZjpsaT4KICAgIDwvcmRmOkFsdD4KICAgPC9kYzp0aXRsZT4KICAgPHhtcFJpZ2h0czpVc2FnZVRlcm1zPgogICAgPHJkZjpBbHQ+CiAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIE5vbi1Db21tZXJjaWFsIE5vIERlcml2YXRpdmVzPC9yZGY6bGk+CiAgICA8L3JkZjpBbHQ+CiAgIDwveG1wUmlnaHRzOlVzYWdlVGVybXM+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjcyNzk5QjFFQThGOERFMTE4MjFDRTRCMkM3RTM2RDcwIgogICAgICBzdEV2dDp3aGVuPSIyMDEwLTAxLTAzVDIxOjM5OjQxKzAxOjAwIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgIDwvcmRmOlNlcT4KICAgPC94bXBNTTpIaXN0b3J5PgogIDwvcmRmOkRlc2NyaXB0aW9uPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KPD94cGFja2V0IGVuZD0iciI/PoZjK6oAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAPHRFWHRBTFRUYWcAVGhpcyBpcyB0aGUgaWNvbiBmcm9tIEdlbnRsZWZhY2UuY29tIGZyZWUgaWNvbnMgc2V0LiDYa+jEAAAAH3RFWHRDb3B5cmlnaHQAUk9ZQUxUWSBGUkVFIExJQ0VOU0Ug3tmLaQAAAEVpVFh0RGVzY3JpcHRpb24AAAAAAFRoaXMgaXMgdGhlIGljb24gZnJvbSBHZW50bGVmYWNlLmNvbSBmcmVlIGljb25zIHNldC4gvBH4GgAAACNpVFh0Q29weXJpZ2h0AAAAAABST1lBTFRZIEZSRUUgTElDRU5TRSAnXQpKAAAAjUlEQVR42sySsQ6AIAxErbgrG/z/jzmygSMDYDHEEE3bgUEv6QD3cinkIKXkAWCbHiqlBKWURn/F404xS875ZTTd9xxTAyZOuMURYyR9MaBtQAfgG8UAjhnfAM3Qf1in0AWIzHcC55yn1jPGaPSvIlGMWCRsWx2SmesPU1NlrT045h89GK6yWBKOOQUYAB5jkjuy0MLbAAAAAElFTkSuQmCC'
  };

  (function($) {
    var methods;
    methods = {
      init: function(options) {
        var settings;
        settings = $.extend({
          duration: 5000,
          animation_duration: 500,
          width: null,
          height: null
        }, options);
        return this.each(function() {
          var $this, data;
          if (!(data = ($this = $(this)).data('silex'))) {
            data = $.extend({
              interval: null,
              in_transition: false,
              in_grid: false
            }, settings);
            $this.data('silex', data);
          }
          $this.css({
            position: 'relative',
            overflow: 'hidden',
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#111213'
          });
          $this.find('img').addClass('silexed').css({
            display: 'block',
            margin: '0 auto'
          }).load(function() {
            var $img;
            $img = $(this);
            if (data.width) {
              if ($img.width() >= data.width) $img.width(data.width);
            } else if ($img.parent().width() <= $img.width()) {
              $img.parent().width($img.width());
            }
            if (data.height) {
              if ($img.height() >= data.height) return $img.height(data.height);
            } else if ($img.parent().height() <= $img.height()) {
              return $img.parent().height($img.height());
            }
          }).wrapAll($('<div>').addClass('silex-wrapper').css({
            display: 'table-cell',
            verticalAlign: 'middle',
            height: settings.height,
            width: settings.width
          }).click(function() {
            return $this.silex('next');
          }));
          if ($this.find('.silexed').length <= 1) {
            data.in_transition = true;
            return;
          }
          $this.find('.silexed:not(:first)').hide();
          $this.append($('<div>').addClass('toolbar').css({
            position: 'absolute',
            height: 26,
            bottom: 10,
            right: -100,
            backgroundColor: 'black',
            borderRadius: 5
          }).append($('<img>').addClass('grid').attr('src', icons.grid).click(function() {
            return $this.silex('grid');
          }), $('<img>').addClass('prev').attr('src', icons.prev).click(function() {
            return $this.silex('prev');
          }), $('<img>').addClass('play').attr('src', icons.play).hide().click(function() {
            return $this.silex('play');
          }), $('<img>').addClass('pause').attr('src', icons.pause).click(function() {
            return $this.silex('pause');
          }), $('<img>').addClass('next').attr('src', icons.next).click(function() {
            return $this.silex('next');
          })));
          $this.find('.toolbar img').css({
            opacity: .5,
            padding: 5
          }).hover((function() {
            return $(this).is(':visible') && $(this).stop().fadeTo(250, .9);
          }), (function() {
            return $(this).is(':visible') && $(this).stop().fadeTo(250, .5);
          }));
          return $this.hover((function() {
            if (data.in_grid) return;
            return $this.find('.toolbar').stop().animate({
              right: 15
            }, 500);
          }), (function() {
            return $this.find('.toolbar').stop().animate({
              right: -100
            }, 500);
          }));
        }).silex('play');
      },
      next: function() {
        return this.each(function() {
          var $this, data;
          if ((data = ($this = $(this)).data('silex')).in_transition || data.in_grid) {
            return;
          }
          data.in_transition = true;
          return $this.find('.silexed:visible').fadeOut(data.animation_duration, function() {
            var next;
            next = $(this).next();
            if (!next.length) next = $this.find('.silexed').first();
            return next.fadeIn(data.animation_duration, function() {
              return data.in_transition = false;
            });
          });
        });
      },
      prev: function() {
        return this.each(function() {
          var $this, data;
          if ((data = ($this = $(this)).data('silex')).in_transition || data.in_grid) {
            return;
          }
          data.in_transition = true;
          return $this.find('.silexed:visible').fadeOut(data.animation_duration, function() {
            var prev;
            prev = $(this).prev();
            if (!prev.length) prev = $this.find('.silexed').last();
            return prev.fadeIn(data.animation_duration, function() {
              return data.in_transition = false;
            });
          });
        });
      },
      play: function() {
        return this.each(function() {
          var $this, data;
          data = ($this = $(this)).data('silex');
          if (!data.interval) {
            $this.find('.play').stop().hide();
            $this.find('.pause').stop().show();
            return data.interval = setInterval((function() {
              return $this.silex('next');
            }), data.duration);
          }
        });
      },
      pause: function() {
        return this.each(function() {
          var $this, data;
          data = ($this = $(this)).data('silex');
          if (data.interval) {
            $this.find('.pause').stop().hide();
            $this.find('.play').stop().show();
            clearInterval(data.interval);
            return data.interval = null;
          }
        });
      },
      toggle: function() {
        return this.each(function() {
          var $this, data;
          data = ($this = $(this)).data('silex');
          if (data.interval) {
            return $this.silex('pause');
          } else {
            return $this.silex('play');
          }
        });
      },
      grid: function() {
        return this.each(function() {
          var $this, $thm, cols, data, img, len, rows, th;
          data = ($this = $(this)).data('silex');
          if (data.in_grid) return;
          data.in_grid = true;
          $this.find('.toolbar').stop().animate({
            right: -100
          }, 500);
          if (($thm = $this.find('.thumbs')).length) {
            $thm.animate({
              top: 0
            }, 500);
            return;
          }
          len = $this.find('.silexed').length;
          cols = Math.ceil(Math.sqrt(len));
          rows = Math.ceil(len / cols);
          th = {
            height: 2 * $this.height() / 3,
            width: 3 * $this.width() / 4,
            padding: 15
          };
          img = {
            padding: 6
          };
          img.width = img.height = Math.min(th.width / cols - 2 * img.padding, th.height / rows - 2 * img.padding);
          th.width = (img.width + 2 * img.padding) * cols;
          th.height = (img.height + 2 * img.padding) * rows;
          return $this.append($('<div>').addClass('thumbs').css({
            position: 'absolute',
            top: -th.height - 2 * th.padding,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            left: ($this.width() - th.width) / 2,
            width: th.width,
            height: th.height,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            padding: th.padding,
            display: 'block'
          }).append($this.find('.silexed').map(function() {
            var $img;
            $img = $(this);
            return $('<img>').attr('src', $img.attr('src')).css({
              float: 'left',
              width: img.width,
              height: img.height,
              padding: img.padding,
              opacity: .7
            }).hover((function() {
              return $(this).stop().fadeTo(250, 1);
            }), (function() {
              return $(this).stop().fadeTo(250, .7);
            })).click(function() {
              data.in_transition = true;
              data.in_grid = false;
              $this.find('.silexed:visible').fadeOut(data.animation_duration, function() {
                return $img.fadeIn(data.animation_duration, function() {
                  return data.in_transition = false;
                });
              });
              $this.find('.thumbs').stop().animate({
                top: -th.height - 2 * th.padding
              }, 500);
              return $this.find('.toolbar').stop().animate({
                right: 15
              }, 500);
            }).get(0);
          })).animate({
            top: 0
          }, 500));
        });
      }
    };
    return $.fn.silex = function(method) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        return $.error('Method ' + method + ' does not exist on jQuery.silex');
      }
    };
  })(jQuery);

}).call(this);
